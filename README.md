# resume_frontend
An angular application for managing a resume during periods of job hunting

I, like many, was part of the layoffs in February, 2023. As I began to gather and organize information to update my resume, I realized there was an opportunity to build something with a need. Job hunting often requires multiple resume versions as each resume needs to be tailored to the position one is applying to. Even if this modification is minor, depending on the formatting, software, etc... this can take more time than desired. It is also becoming more necessary to ensure that AI performing the initial review of resumes, is not discarding it. Templates online provide little to control and I did not find information on how specific templates were performing against the AI. Finally, it provides an opportunity to build a solution based on a specific need at my current levels of skill and potential reviewers to see what that looks like.


## Current phase:
Converting from hard coded data within the HTML of the main component, to mock data in files. Each section will be modeled, converted into a component, its data moved to files, and a service created to transport the data.


## Organization:
At this phase of development, organization is occuring at the 'section' level of the resume. Each section has its' own model, data, service, and component.

### src/app/models:
Typescript files which define the properties of a model object based on the section of the resume they represent

### src/app/data (mock data):
Typescript files which import the respective model and export a hard-coded object of the model type.

### src/app/services:
Typescript files which retrieve data

### src/app/components:
Typescript, HTML, and CSS files which define the look, structure, and functionality of the application


