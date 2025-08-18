# infilect-monitoring-dashboard
<ORG> → yuvrajahire
<REPO> → infilect-monitoring-dashboard
<namespace> → monitoring-app
<registry>/<repo> → yuvrajahire/backend (or yuvrajahire/frontend)
<tag> → latest


<REPO> → infilect-monitoring-dashboard

<namespace> → monitoring-app

<registry>/<repo> → yuvrajahire/backend (or yuvrajahire/frontend)

<tag> → latest 
 (updated)


## Table of Contents
1. [Project Overview](#project-overview)
2. [System Architecture](#system-architecture)
3. [Tech Stack & Reasoning](#tech-stack--reasoning)
4. [Local Deployment Guide](#local-deployment-guide)
   - [1. Clone the Repository](#1-clone-the-repository)
   - [2. Build Docker Images](#2-build-docker-images)
   - [3. Push Docker Images to Docker Hub](#3-push-docker-images-to-docker-hub)
   - [4. Run with Docker Compose](#4-run-with-docker-compose)
5. [Frontend & Backend Access (Local / EC2)](#frontend--backend-access-local--ec2)
6. [Deploy on Kubernetes](#deploy-on-kubernetes)
7. [Documentation](#documentation)
8. [CI/CD](#cicd)
9. [Security Group Rules (AWS)](#security-group-rules-aws)


## Project Overview
The Infilect Monitoring Dashboard is a full-stack monitoring application with a **React frontend**, **Node.js backend**, and **containerized deployment** using Docker and Kubernetes. It also includes AWS infrastructure scripts for provisioning and deployment.  

**Key Components:**
- **Frontend:** React + Nginx  
- **Backend:** Node.js + Express  
- **Containerization:** Docker, Docker Compose  
- **Orchestration:** Kubernetes manifests in `k8s/`
- **Documentation:** Architecture diagrams, setup guides, and additional instructions in `docs/`  

---

## System Architecture
![Architecture Diagram](docs/architecture-diagram.png)  
*Refer to `docs/` for detailed diagrams.*

**Flow:**


---

## Tech Stack & Reasoning
| Layer       | Technology | Reasoning |
|------------|------------|-----------|
| Frontend   | React + Nginx | Fast UI development and static hosting |
| Backend    | Node.js + Express | Lightweight, asynchronous API server |
| Container  | Docker       | Consistent environment for dev & prod |
| Orchestration | Kubernetes | Scalable deployment and management |
| CI/CD      | GitHub Actions  | Automated build, test, deploy |
| Cloud Infra | AWS (EC2, S3, IAM, VPC, ALB) | Production-grade, highly available infra |

---

## Local Deployment Guide

### 1. Clone the Repository
```bash
git clone https://github.com/yuvrajahire/infilect-monitoring-dashboard.git
cd infilect-monitoring-dashboard

2. Build Docker Images
# Frontend
docker build -t yuvrajahire/frontend:latest -f frontend/Dockerfile .

# Backend
docker build -t yuvrajahire/backend:latest -f backend/Dockerfile .

3. Push Docker Images to Docker Hub
docker push yuvrajahire/frontend:latest
docker push yuvrajahire/backend:latest

4. Run with Docker Compose
docker-compose up -d


Frontend Access: http://98.82.175.141:3000/

Backend API: http://98.82.175.141:5000/metrics

5. Deploy on Kubernetes
kubectl apply -f k8s/

Documentation

project documentation is available in the docs/ folder:
architecture-diagram.png – System architecture overview

CI/CD

Automated CI/CD pipelines are defined in .github/workflows/ :

Build Docker images

Run unit/integration tests

Deploy to staging/production environment

Frontend & Backend Access (Local)

Frontend: http://98.82.175.141:3000

Backend: http://98.82.175.141:5000/metrics

Security Group Rules (AWS)

To allow external access to the app:

Frontend: TCP port 3000 → Source: 0.0.0.0/0

Backend Metrics: TCP port 5000 → Source: 0.0.0.0/0






