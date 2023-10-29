# Full structure of the project

This project use microservices architecture. Each service is a separate project. All documentation is compiled in this project.

## Services

- [viva-vault](https://github.com/Viva-foundation/viva-vault) - Vault service for storing and processing personal information of refugees and people in need of help.
- [viva-med](https://github.com/Viva-foundation/viva-med) - Medical service for storing and processing medical information and drug distribution.

## RFCs
- [PD conceps](/data/index)

## High level relations

```mermaid
---
title: Register refugee
---
flowchart TB
    site[Request iframe from viva-vault] --> iframe
    iframe[collect personal data by iframe] -->|Send data| viva-vault{Do we have some \n info about the refugee?}
    viva-vault -->|No| viva-vault-add[Create refugee entity]
    viva-vault -->|Yes| viva-vault-expand[Expand refugee info, and improve hash id's]
    viva-vault-add--> info-request-question{Was refugee info required \n by the service?}
    viva-vault-expand--> info-request-question
    info-request-question -->|Yes| info-request[Request refugee info from other systems]
```


```mermaid
---
title: Retrive refugee info
---
flowchart TB
    viva-med -->|Request info by hash| viva-vault
    viva-vault -->|Request history by hash| service1
    viva-vault -->|Request history by hash| service2
    viva-vault -->|Request history by hash| service3
    service1 --> viva-vault 
    service2 --> viva-vault
    service3 --> viva-vault
    viva-vault -->|Respond with help history| viva-med
    
```