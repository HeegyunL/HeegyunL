#!/bin/sh
@rem ===== 1. 빌드된 jar파일을 서버에 전송
scp -i "/Users/hee/Documents/keys/gagymservice.pem" -r /Users/hee/Documents/Project/projectspace/gagymservice/build/libs/*.jar ubuntu@ec2-52-79-120-222.ap-northeast-2.compute.amazonaws.com:/home/ubuntu/web/gagymservice
@rem ===== 2. jar파일을 실행하는 run.sh 스크립트 파일을 서버에 전송
scp -i "/Users/hee/Documents/keys/gagymservice.pem" -r /Users/hee/Documents/Project/projectspace/gagymservice/run.sh ubuntu@ec2-52-79-120-222.ap-northeast-2.compute.amazonaws.com:/home/ubuntu/web/gagymservice
@rem ===== 3. run.sh 스크립파일을 실행가능하도록 권한부여(777 -> rwx rwx rwx)
ssh -i "/Users/hee/Documents/keys/gagymservice.pem" ubuntu@ec2-52-79-120-222.ap-northeast-2.compute.amazonaws.com "sudo chmod 777 /home/ubuntu/web/gagymservice/run.sh"
@rem ===== 4. jar파일 있는 디렉터리까지 이동하고, run.sh로 기존 프로세스 죽이고 실행
ssh -i "/Users/hee/Documents/keys/gagymservice.pem" ubuntu@ec2-52-79-120-222.ap-northeast-2.compute.amazonaws.com "cd /home/ubuntu/web/gagymservice; nohup java -Dspring.profiles.active=dev -jar gagym*.jar 1>gagym.log 2>&1 &"


@rem ===== 1. 다른 프로젝트에서 할 때는 사전에 mkdir /home/ubuntu/app/프로젝트명 디렉터리를 만들어야함
@rem ===== 2. 키파일명 myworkspace.pem 제외하고 "myworkspace" 이것을 프로젝트명으로 바꿈  

@rem ===== 1. 빌드된 jar파일을 서버에 전송
scp -i "/Users/hee/Documents/keys/gagymservice.pem" -r /Users/hee/Documents/Project/projectspace/gagymservice/build/libs/*.jar ubuntu@ec2-52-79-120-222.ap-northeast-2.compute.amazonaws.com:/home/ubuntu/app/gagymservice
@rem ===== 2. 기존 프로세스 종료
ssh -i "/Users/hee/Documents/keys/gagymservice.pem" ubuntu@ec2-52-79-120-222.ap-northeast-2.compute.amazonaws.com "pkill -9 -f java"
@rem ===== 3. dev프로필로 jar 파일 실행
ssh -i "/Users/hee/Documents/keys/gagymservice.pem" ubuntu@ec2-52-79-120-222.ap-northeast-2.compute.amazonaws.com "cd /home/ubuntu/app/gagymservice; nohup java -Dspring.profiles.active=dev -jar gagymservice*.jar 1>gagymservice.log 2>&1 &"