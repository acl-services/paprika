DOCKERIMAGE = paprika
DOCKERCONTAINER = paprika

.PHONY: build generate-docs

build:
	docker build -t $(DOCKERIMAGE) -f ./Dockerfile.build .

generate-docs: build
	rm -rf storybook-dist
	docker run --name $(DOCKERCONTAINER) $(DOCKERIMAGE) busybox true
	docker cp $(DOCKERCONTAINER):/src/storybook-dist .
	docker rm $(DOCKERCONTAINER)