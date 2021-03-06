package com.git.gagymservice.diary;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DiaryController {
	private DiaryService service;
	private DiaryRepository repo;
	
	@Autowired
	public DiaryController(DiaryRepository repo, DiaryService service)
	{
		this.repo =repo;
		this.service =service;
	}
	@GetMapping(value="diary")
	public List<Diary> getDiary() throws InterruptedException{
		return repo.findAll(Sort.by("id").descending());
	}
	@GetMapping("/diary/paging")
	public Page<Diary> getDiaryPaging(@RequestParam int page, @RequestParam int size) {
		// findAll(Pageable page)
		// findAll(PageRequest.of(page, size, Sort sort));
		return repo.findAll(PageRequest.of(page, size, Sort.by("id").descending()));
	}
	@PostMapping(value="/diary")
	public Diary addDiary(@RequestBody Diary diary, HttpServletResponse res) throws InterruptedException{
		
		Diary diaryItem = Diary.builder()
				.memberName(diary.getMemberName()).diaryMorning(diary.getDiaryMorning()).diaryLunch(diary.getDiaryLunch())
				.diaryDinner(diary.getDiaryDinner()).diaryRoutine(diary.getDiaryRoutine()).diaryRequest(diary.getDiaryRequest())
				.trainerName(diary.getTrainerName()).trainerFeedback(diary.getTrainerFeedback())
				.diaryCreateTime(new Date().getTime()).build();
		Diary diarySaved = repo.save(diaryItem);
		res.setStatus(HttpServletResponse.SC_CREATED);
		return diarySaved;
	}
	@DeleteMapping(value ="/diary/{id}")
	public boolean removeDiary(@PathVariable long id, HttpServletResponse res)throws InterruptedException{
		Optional<Diary>diary = repo.findById(id);
		if(diary.isEmpty()) {
			res.setStatus(HttpServletResponse.SC_NOT_FOUND);
			return false;
		}
		repo.deleteById(id);
		return true;
	}
	@PutMapping(value="/diary/{id}")
	public Diary modifyDiary(@PathVariable long id, @RequestBody Diary diary, HttpServletResponse res)
	throws InterruptedException{
		Optional<Diary> diaryItem = repo.findById(id);
		if(diaryItem.isEmpty()) {
			res.setStatus(HttpServletResponse.SC_NOT_FOUND);
			return null;
		}
		Diary diaryToSave = diaryItem.get();
		diaryToSave.setMemberName(diary.getMemberName());
		diaryToSave.setDiaryMorning(diary.getDiaryMorning());
		diaryToSave.setDiaryLunch(diary.getDiaryLunch());
		diaryToSave.setDiaryDinner(diary.getDiaryDinner());
		diaryToSave.setDiaryRoutine(diary.getDiaryRoutine());
		diaryToSave.setDiaryRequest(diary.getDiaryRequest());
		diaryToSave.setTrainerName(diary.getTrainerName());
		diaryToSave.setTrainerFeedback(diary.getTrainerFeedback());
	
		Diary diarySaved = repo.save(diaryToSave);
		service.sendDiary(diary);
		return diarySaved;
	}

}
