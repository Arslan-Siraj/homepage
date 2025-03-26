import { TeamID, definePerson } from '../..';

export default definePerson({
    name: 'Arslan Siraj',
    role: 'PhD Student',
    avatar: '/images/persons/siraj-arslan.png',
    email: 'arslan.siraj@uni-tuebingen.de',
    phone: '+49 7071 29 70437',
    address: 'Sand 14, 2.OG Raum C313, 72076 Tübingen',
    team: TeamID.ABI,
    socialLinks: [
        { icon: 'github', link: 'https://github.com/Arslan-Siraj' },
        { icon: 'linkedin', link: 'https://www.linkedin.com/in/arslan-siraj-507949155/' },
    ],
    interests: [
        'Protein-Nucleic-acid crosslink Mass Spectrometry',
        'Machine Learning',
        'Open Source Software',
    ],
    education: [
        {
            year: [2019, 2021],
            value: 'Chonbuk National University, South Korea - Master Electronics and Information Engineering',
        },
        {
            year: [2015, 2019],
            value: 'Quaid-i-Azam university, Pakistan - Bachelor Information Technology',
        },
    ],
   
});
