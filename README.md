# large-app

## Deploying this app and associated plugin in docker
```
cd <workspace>
git checkout git@github.com:koyadume/large-app-plugin1.git
cd large-app-plugin1
docker build -t large-app-plugin1 . && docker run -d --name=large-app-plugin1 -p 8091:80 large-app-plugin1
cd ..
git checkout git@github.com:koyadume/large-app.git
cd large-app
docker build -t large-app . && docker run -d --name=large-app -p 8090:80 large-app
```

## Testing plugin and main apps
### Plugin app
```
curl http://<docker-vm-ip>:8091
```
### Main app
```
curl http://<docker-vm-ip>:8090
```

