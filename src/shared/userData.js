const phone = {
    countryCallingCode: String,
    identificationNumber: Number
}

const social = {
    site: String,
    url: String
}

const address = {
    type: String,
    houseNumber: Number,
    building: String,
    line1: String,
    line2: String,
    landmark: String,
    city: String,
    state: String,
    pinCode: String
}


const contact = {
    phone: [phone],
    social: [social],
    address: [address]
}

const skill = {
    name: String,
    rating: Number,
    version: Number
}

const skillSet = {
    skills: [skill],
    tools: [skill],
    os: [skill]
}

const education = {
    qualification: String,
    university: String,
    college: String,
    batch: String,
    score: Number
}

const language = {
    name: String,
    proficiency: Number
}

const hobby = {
    activity: String,
    frequency: String
}

const project = {
    name: String,
    description: String,
    period: String,
    keyStacks: String,
    role: String,
}

const about = {
    status: String,
    gender: String,
    bloodGroup: String,
    category: String,
    nickName: String,
    birthday: String,
    father: String,
    contact: contact,
}

export const user = {
    name: String,
    profile: String,
    description: String,
    vision: String,
    totalExperience: Number,
    currentOrganization: String,
    currentLocation: String,
    preferredLocation: String,
    ctc: String,
    ectc: String,
    noticePeriod: String,
    reasonForChange: [],
    personalAttributes: [],
    contact: contact,
    skillSets: skillSet,
    education: [education],
    languages: [language],
    hobbies: [hobby],
    responsibilities: [],
    projects: [project],
    about: about,
    declaration: String
}
