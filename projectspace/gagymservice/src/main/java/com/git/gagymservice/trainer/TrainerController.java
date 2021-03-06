package com.git.gagymservice.trainer;

import java.util.List;
import java.util.Optional;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.git.gagymservice.lib.TextProcesser;

@RestController
public class TrainerController {
	private TrainerService	service;
	private TrainerRepository repo;
	
	@Autowired
	public TrainerController(TrainerRepository repo, TrainerService service)
	{
		this.repo =repo;
		this.service = service;
		
	}
	@GetMapping(value="/trainer")
	public List<Trainer>getTrainer() throws InterruptedException{
		return repo.findAll(Sort.by("id").descending());
	}
	@PostMapping(value="/trainer")
	public Trainer addTrainer(@RequestBody Trainer trainer, HttpServletResponse res)throws InterruptedException{
		if (TextProcesser.isEmpyText(trainer.getTrainerPhotoUrl())) {
			res.setStatus(HttpServletResponse.SC_BAD_REQUEST);
			return null;
		}
		Trainer trainerItem=Trainer.builder()
				.gymCode(trainer.getGymCode())
				.trainerName(trainer.getTrainerName()).trainerIntro(trainer.getTrainerIntro()).trainerPhotoUrl(trainer.getTrainerPhotoUrl()).fileType(trainer.getFileType())
				.fileName(trainer.getFileName()).pt1TimePrice(trainer.getPt1TimePrice()).pt10TimePrice(trainer.getPt10TimePrice()).pt30TimePrice(trainer.getPt30TimePrice())
				.yoga1TimePrice(trainer.getYoga1TimePrice()).yoga10TimePrice(trainer.getYoga10TimePrice()).yoga30TimePrice(trainer.getYoga30TimePrice())
				.pilates1TimePrice(trainer.getPilates1TimePrice()).pilates10TimePrice(trainer.getPilates10TimePrice()).pilates30TimePrice(trainer.getPilates30TimePrice())
				.build();
		
		Trainer trainerSaved = repo.save(trainerItem);
		res.setStatus(HttpServletResponse.SC_CREATED);
		service.sendTrainer(trainer);
		return trainerSaved;
	}
	
	@DeleteMapping(value="/trainer/{id}")
	public boolean removeTrainer(@PathVariable long id, HttpServletResponse res)throws InterruptedException{
		Optional<Trainer>trainerItem=repo.findById(id);
		if(trainerItem.isEmpty()) {
			res.setStatus(HttpServletResponse.SC_NOT_FOUND);
			return false;
		}
		repo.deleteById(id);
		return true;
	}
	
	@PutMapping(value="/trainer/{id}")
	public Trainer modifyTrainer(@PathVariable long id, @RequestBody Trainer trainer, HttpServletResponse res)
	throws InterruptedException{
		Optional<Trainer>trainerItem=repo.findById(id);
		if(trainerItem.isEmpty()) {
			res.setStatus(HttpServletResponse.SC_NOT_FOUND);
			return null;
		}
		Trainer trainerToSave = trainerItem.get();
		trainerToSave.setGymCode(trainer.getGymCode());
		trainerToSave.setTrainerName(trainer.getTrainerName());
		trainerToSave.setTrainerIntro(trainer.getTrainerIntro());
		trainerToSave.setTrainerPhotoUrl(trainer.getTrainerPhotoUrl());
		trainerToSave.setPt1TimePrice(trainer.getPt1TimePrice());
		trainerToSave.setPt10TimePrice(trainer.getPt10TimePrice());
		trainerToSave.setPt30TimePrice(trainer.getPt30TimePrice());
		trainerToSave.setYoga1TimePrice(trainer.getYoga1TimePrice());
		trainerToSave.setYoga10TimePrice(trainer.getYoga10TimePrice());
		trainerToSave.setYoga30TimePrice(trainer.getYoga30TimePrice());
		trainerToSave.setPilates1TimePrice(trainer.getPilates1TimePrice());
		trainerToSave.setPilates10TimePrice(trainer.getPilates10TimePrice());
		trainerToSave.setPilates30TimePrice(trainer.getPilates30TimePrice());
		
		Trainer trainerSaved = repo.save( trainerToSave);
		service.sendTrainer(trainer);
		return trainerSaved;
		
	}
	
}
