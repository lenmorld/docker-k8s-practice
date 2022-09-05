# Docker review

https://www.notion.so/lennythedev/Docker-again-5f47ba7d01214b20abb3d359d6d4cdea


# K8s review

https://www.notion.so/lennythedev/k8s-again-f9bbcaba72924b56b00ea0aaeafdaf49

# Docker + k8s

https://www.notion.so/lennythedev/docker-k8s-again-25c8bc0e16a54751abe5d9b8c9f13a44


---
# Steps


1. Running app directly on local
    ```
    cd app
    node server.js
    ```

2. Dockerize - Build docker image from Node app

    ```
    docker build -t my-app:1.0 .

    # check image
    docker images

    # run image
    # docker run my-app:1.0

    # run image specifying port and name
    docker run -d \
        -p3000:3000 \
        --name myapp \
        my-app:1.0
    ```

    2a. Push to AWS

        ```
        aws configure
        aws configure list

        # login
        aws ecr get-login-password --region ca-central-1 | docker login --username AWS --password-stdin 656985594497.dkr.ecr.ca-central-1.amazonaws.com

        # build
        docker build -t my-app-2 .

        # tag
        docker tag my-app-2:latest 656985594497.dkr.ecr.ca-central-1.amazonaws.com/my-app-2:latest

        # push to repo
        docker push 656985594497.dkr.ecr.ca-central-1.amazonaws.com/my-app-2:latest
        ```

    2b. Push to Dockerhub
        - https://hub.docker.com/r/lenmorld/docker-k8s-practice

        ```
        docker login
        docker build -t lenmorld/docker-k8s-practice .
        docker push lenmorld/docker-k8s-practice
        ```

3. k8s - run on minikube after creating a pod from Node app (using Deployment and Service)
    
    See `webapp-deployment.yaml` for example

    a. Access from browser - need external service, since we’re accessing it outside the cluster. We use NodePort

        ```
        # expose ports on start
        minikube start --ports=30100:30100

        # create pod (deployment) and service
        kubectl apply -f webapp-deployment.yaml

        # doesn't work on Mac - docker driver
        # minikube service webapp-service

        # verify the ports docker exposed for minikube 
        docker port minikube

        # see service - internal IP, port
        kubectl get svc
        ```

    b. SSH to minikube and access the service internally from

        ```
        # Get minikube IP address
        # note that this is the IP of Kubernetes Master Node which is a docker container
        minikube ip
        minikube ssh
        ```

    Access on http://192.168.49.2:30100

# K8s common commands

```
minikube status
```

```
# Delete and cleanup minikube
minikube delete
```

```
kubectl <command: get|describe|logs> <component: all|service|deployments|specific component name>

kubctl get all

# get info on service
kubectl get service
kubectl get deployments
...

kubectl describe pod pod-name
kubectl logs pod-name

# get info on node, show more info
kubectl get node -o wide
```

