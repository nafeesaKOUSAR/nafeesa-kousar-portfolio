import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Nafeesa',
    lastName:  'Kousar',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Web Developer',
    avatar:    '/images/avatar1.jpg',
    location:  'Asia/Karachi',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ['English', 'Urdu']  // optional: Leave the array empty if you don't want to display languages
}

const contact = {
    display: true,
    title: <>Contact with {person.firstName}</>,
    description: <>Feel free to reach out to me for collaborations, questions, or just to connect!</>,
    email: "kousarnafeesa6@gmail.com", // Add your email or contact method here
    phone: "03203172133" // Optionally, include a phone number
};


const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/nafeesaKOUSAR',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/nafeesa-kousar-b73199287/',
    },
    {
        name: 'X',
        icon: 'x',
        link: '',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:kousarnafeesa6@gmail.com',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>Web Developer and Problem Solver</>,
    subline: <>I'm {person.firstName}, a Laravel web developer passionate about building efficient and scalable web
        applications.<br/>Beyond developing applications, I actively explore emerging technologies and transform innovative ideas into impactful solutions.
    </>
}

    const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: true
    },
    avatar: {
        display: true
    },
    calendar: {
        display: true,
        link: 'https://cal.com'
    },
        intro: {
            display: true,
            title: 'Introduction',
            description: <>Passionate and driven web developer with a solid foundation in computer science and programming principles. A recent graduate now honing my skills in Laravel development, I bring hands-on experience in creating dynamic, user-friendly web applications. With expertise in both front-end and back-end development, I am committed to continuous learning and staying at the forefront of emerging technologies, aiming to deliver impactful digital solutions and grow in the ever-evolving tech industry.</>
        },
        work: {
            display: true, // set to false to hide this section
            title: 'Work Experience',
            experiences: [
                {
                    company: 'AI Pinnacle Private Limited, Rawalpindi',
                    timeframe: 'July 15, 2024 – Present',
                    role: 'Junior Web Developer',
                    achievements: [
                        <>Responsible for both front-end and backend development, coding, and maintaining web applications.</>,
                        <>Collaborated with the development team to ensure timely project delivery.</>,
                        <>Assisted in troubleshooting and debugging issues to improve application performance.</>
                    ],
                    images: [ ]
                },
                {
                    company: 'AI Pinnacle Private Limited, Rawalpindi (Internship in Laravel)',
                    timeframe: 'May 2024 – June 2024',
                    role: 'Web Development Intern',
                    achievements: [
                        <>Developed and maintained web applications with a focus on both front-end and back-end development using Laravel.</>,
                        <>Worked closely with the development team to ensure project deliverables met client specifications and deadlines.</>
                    ],
                    images: [ ]
                },
                {
                    company: 'Third International Multidisciplinary Conference (IMC)',
                    timeframe: 'October 03, 2024',
                    role: 'As a Presenter',
                    achievements: [
                        <>Thrilled to have been a part of the Third International Multidisciplinary Conference (IMC) as a presenter, hosted at Fazaia Bilquis College of Education for Women, PAF Base Nur Khan, Rawalpindi.</>,
                        <>As part of the conference theme "Integrating Innovation & Sustainability Across Disciplines,"Wellness Weaver introduces a forward-thinking approach to personalized healthcare. The project leverages intelligent technology to offer dynamic solutions for disease prevention and health management, empowering individuals to make informed decisions about their well-being</>,
                        <>Presenting this work allowed me to explore the intersection of cutting-edge innovation and sustainability in healthcare with like-minded professionals and experts.</>
                    ],
                    images: [
                        {
                            src: '/images/projects/project-01/conf-1.jpg',
                            alt: 'Conference',
                            width: 16,
                            height: 9
                        },
                        {
                            src: '/images/projects/project-01/conf-2.jpg',
                            alt: 'Conference',
                            width: 16,
                            height: 9
                        },
                    ]
                },
                {
                    company: 'Techno Spot at NASTP',
                    timeframe: 'September 2023 – November 2023',
                    role: 'Web Development Intern',
                    achievements: [
                        <>Completed a 2-month internship focused on web development, gaining practical experience in both front-end and back-end development.</>,
                        <>Collaborated with senior developers to assist in various web development tasks, enhancing my troubleshooting and debugging skills.</>,
                        <>Developed web applications while ensuring they met required standards and deadlines.</>
                    ],
                    images: [ ]
                }
            ]
        },
        studies: {
            display: true, // set to false to hide this section
            title: 'Education',
            institutions: [
                {
                    name: 'Air University',
                    description: <>BS in Computer Science (2020 - 2024)</>,
                },
                {
                    name: 'Fazaia Inter College, Nur Khan, Rawalpindi',
                    description: <>FSC (ICS) (2019 - 2020), Federal Board.</>,
                },
                {
                    name: 'Govt Girls High School, Rawalpindi',
                    description: <>Matriculation (Medical) (2017 - 2018), Rawalpindi Board.</>,
                }
            ]
        },
    technical: {
        display: true, // set to false to hide this section
        title: 'Technical skills',
        skills: [
            {
                title: 'Laravel',
                description: <>Proficient in Laravel for building robust and scalable web applications, with expertise in backend development and database management.</>,
                images: [
                    {
                        src: '/images/projects/project-01/tableop-2.jpg',
                        alt: 'Laravel Project Image',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/project-01/tableop-1.jpg',
                        alt: 'Laravel Project Image',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/project-01/op-1.jpg',
                        alt: 'Laravel Project Image',
                        width: 16,
                        height: 9
                    },
                ]
            },
            {
                title: 'HTML/CSS',
                description: <>Proficient in HTML5 and CSS3 for structuring and styling responsive web pages with a focus on accessibility and performance.</>,
                images: []
            },
            {
                title: 'JavaScript',
                description: <>Experienced in using JavaScript for dynamic client-side functionality and integrating it with web applications for seamless user experiences.</>,
                images: []
            },
            {
                title: 'PHP',
                description: <>Strong knowledge of PHP for server-side scripting and web application development, with extensive experience in backend logic and API integration.</>,
                images: []
            },
            {
                title: 'MySQL',
                description: <>Skilled in MySQL for designing and managing relational databases, ensuring efficient data storage, and query optimization.</>,
                images: []
            },
            {
                title: 'Python',
                description: <>Experienced in Python for building data-driven applications, automation tasks, and leveraging its rich ecosystem for various web development and data analysis projects.</>,
                images: [
                    {
                        src: '/images/projects/project-01/Picture-1.jpg',
                        alt: 'Wellness Weaver Project Image',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/project-01/Picture-2.jpg',
                        alt: 'Wellness Weaver Project Image',
                        width: 16,
                        height: 9
                    },

                ]
            },
        ]
    }
}


const blog = {
    label: 'Blog',
    title: 'Writing about design and tech...',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Design and dev projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    // Images from https://pexels.com
    images: [
        { 
            src: '/images/gallery/img-01.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-02.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-03.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-04.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-05.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-06.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-07.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-08.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-09.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-10.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-11.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-12.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-13.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-14.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
    ]
}

export { person, social, contact, home, about, blog, work, gallery };