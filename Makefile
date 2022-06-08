dockercontainerTag = mem-frontend-nginx

aws-login:
	aws ecr get-login-password --region us-east-2 | docker login --username AWS --password-stdin 911498203022.dkr.ecr.us-east-2.amazonaws.com

aws-tag:
	docker tag ${dockercontainerTag} 911498203022.dkr.ecr.us-east-2.amazonaws.com/memoir:${dockercontainerTag}

aws-push:
	docker push 911498203022.dkr.ecr.us-east-2.amazonaws.com/memoir:${dockercontainerTag}

docker-build:
	docker build --tag ${dockercontainerTag} -f Dockerfile.prod .



