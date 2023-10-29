# Personal Data Managing proposal
Author: Igor Sheko 

Status: draft-01

Date: 28.10.2023

## Intro 
This document is describe how personal data (PD) must be collected, transferred, 
stored, handled, encrypted and hashed. Primary goal of the document to provide 
clear view of such procedures so make it simpler to implement and audit all 
PD-related processes to minimise potential leak and minimise blast radius 
in case of such leakage.

## What Personal Data is
**MEMO: This part MUST be approved by a lawyer**

Because Armenian government have clear description of the term, we will use a 
wide broad description of the term. In case if we'll have more concrete 
information from the government, the term can be changed or sharpened. 

**Personal Data** - the sum of any information that can identify a refuge 
or identify them from all other refuge without assumption. 

What must be personal data:
- Passport and ID number (both Armenian and Artsakh) - I think, here we can 
agree without additional discuss.
- Full name (First, Middle and Last) - Because we are working with limited 
population there is a good chance that we will have unique combinations here
- Place of living in Artsakh (before genocide) - Person can be be simply traced
- Place of current living - Because manu refuges live now in quite compact way
it can signally increase blast radius
- Medical information with lining to other PD

What can be personal data
- Cellphone number - In case any of cell providers used sole number diapason 
for refuges, we can expose to much data by exposing only 3-4 numbers. We can 
check it after some data will be gathered.
- Date of birth - It can be because of limited population. We need to gather 
additional data about birth rate in the region

What can't be a personal data:
- Name, Father name, Surname - If transferred separately
- Partial ID/Passport number
- Age
- Education data
- Medical information without lining to PD

**Small but important notion**: any information can be personal data if amount
of information is enough. Better will be not send data at all.

## Why we use to store PD?
Short answer is: We don't use to store PD for our short terms goals. If we'll 
think about the system without real-live implication we can lead to that answer. 
Because we can store only big hash table with every combination of PD field, for
example and in ideal case this data will be enough. 

But because we plan that our product will work in the real world, and also 
in a field or refuge tent camp, we must assume correction and validation
algorithms and procedures. We have the same situation with different name
transliterations thou. Because of regional and cultural specific we can have 
multiple "correct" spelling for the same person. Problem is that in some cases
it can be not spelling problem but different persons.

### Hash graph
We can use pairs or triplets of any parameters to create hash data. But we need
some hash algorithm with low collisions chance, and algorithm to prevent 
cross-data collision.

Or we can create hash tables only for integration important data

### Multiple computation vs anonymize UID
I propose to do not create some uid, because from my perspective it can create
a weak point for every integrated system in case of viva-vault have downtime. 
If we'll use hashes directly, integrated systems can calculate and use them 
in case of our blackout. But it will create additional payload to the viva-vault
and for integrated systems

### Type mistakes and how to fix data by using Levin-stain distance algorithm
For data correction we can use Levin-Stain distance algorithm with validation
by another field, at least until we found better solution. 

Example: we received name field "Арм**е**н" and birthdate "01.01.69" but we 
have record with name "Арм**э**н" with the same birthdate. Based on Levi-Stain
distance we can recommend data validation or data join.

### PD encroachment by peer systems

## Attack vectors

### Prohibited operation

#### List operation

### Partial opening of anonymous data

## Countermeasures to protect PD

### Data collecting





