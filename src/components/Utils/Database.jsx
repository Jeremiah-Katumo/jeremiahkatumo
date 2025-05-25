import React from "react";
import imarika from '../../styles/assets/img/imarika.png';
import cipk from '../../styles/assets/img/cipk.png';
import wireframe from '../../styles/assets/img/wireframe.png';

// Projects Data
const data = [
    { id: 1, imageNum: 'one', title: 'Imarika Corporate Website', category: 'Web Development', link: 'https://imarika-ui.vercel.app', imageLink: imarika },
    { id: 2, imageNum: 'two', title: 'CIPK Corporate Website', category: 'Web Development', link: 'https://cipk-app.vercel.app', imageLink: cipk },
    { id: 3, imageNum: 'one', title: 'SMS-Based Jobs App', category: 'Designing, Wireframing', link: 'https://miro.com/app/board/uXjVIBfOL_4=/?share_link_id=861520531822', imageLink: wireframe },
];

const sectionHeaderData = [
    { sectionHeading: "Featured Projects", sectionHeadingTwo: "My Projects", sectionText: "A showcase of selected projects where I applied my skills in web development, data analysis, and machine learning to solve real-world problems. Each project highlights my approach to building practical, scalable solutions." }
];

// Services Data
const serviceTopCardData = [
    { category: "top", icon: "flaticon-analysis", heading: "Web Design", sectionHeading: "What I Offer", sectionText: "Whether you're building a website, need help with your data, or just want advice on your tech idea - I’ve got you covered. Let’s bring your vision to life, one solution at a time." },
    { category: "top", icon: "flaticon-flasks", heading: "Data Analysis", sectionHeading: "What I Offer", sectionText: "Whether you're building a website, need help with your data, or just want advice on your tech idea - I’ve got you covered. Let’s bring your vision to life, one solution at a time." },
    { category: "top", icon: "flaticon-ideas", heading: "Web Development", sectionHeading: "What I Offer", sectionText: "Whether you're building a website, need help with your data, or just want advice on your tech idea - I’ve got you covered. Let’s bring your vision to life, one solution at a time." },
]

const serviceBottomCardData = [
    { category: "bottom", icon: "flaticon-analysis", heading: "Software Development", sectionHeading: "What I Offer", sectionHeadingTwo: "My Services", sectionText: "Whether you're building a website, need help with your data, or just want advice on your tech idea - I’ve got you covered. Let’s bring your vision to life, one solution at a time." },
    { category: "bottom", icon: "flaticon-flasks", heading: "Machine Learning", sectionHeading: "What I Offer", sectionHeadingTwo: "My Services", sectionText: "Whether you're building a website, need help with your data, or just want advice on your tech idea - I’ve got you covered. Let’s bring your vision to life, one solution at a time." },
    { category: "bottom", icon: "flaticon-ideas", heading: "Consultation", sectionHeading: "What I Offer", sectionHeadingTwo: "My Services", sectionText: "Whether you're building a website, need help with your data, or just want advice on your tech idea - I’ve got you covered. Let’s bring your vision to life, one solution at a time." }
]

// const serviceTopCardData = [
//     { category: "top", icon: "flaticon-analysis", heading: "Web Design", sectionHeading: "Services", sectionText: "I design clean, responsive websites that align with your brand and deliver a seamless user experience. Whether you're building from scratch or need a redesign, I create interfaces that are both functional and visually compelling." },
//     { category: "top", icon: "flaticon-flasks", heading: "Data Analysis", sectionHeading: "Services", sectionText: "I help you turn raw data into clear, actionable insights. From data cleaning and visualization to trend identification and reporting, I use tools like Python, Excel, and SQL to support smarter decisions and drive real results." },
//     { category: "top", icon: "flaticon-ideas", heading: "Web Development", sectionHeading: "Services", sectionText: "I build fast, scalable, and fully functional websites using modern technologies like Laravel, Django, and JavaScript frameworks. From dynamic web apps to backend APIs, I turn ideas into interactive, user-friendly digital solutions." },
// ]

// const serviceBottomCardData = [
//     { category: "bottom", icon: "flaticon-analysis", heading: "Software Development", sectionHeading: "Services", sectionHeadingTwo: "My Services", sectionText: "I develop custom software solutions tailored to your specific needs—whether it's a web app, API, or internal tool. Using frameworks like Laravel, Django, and Nest.js, I create reliable, scalable systems that solve real-world problems." },
//     { category: "bottom", icon: "flaticon-flasks", heading: "Machine Learning", sectionHeading: "Services", sectionHeadingTwo: "My Services", sectionText: "I develop machine learning models that turn data into predictive insights and intelligent automation. From data preprocessing and model training to deployment, I use tools like Python, scikit-learn, and TensorFlow to solve real-world problems through AI." },
//     { category: "bottom", icon: "flaticon-ideas", heading: "Consultation", sectionHeading: "Services", sectionHeadingTwo: "My Services", sectionText: "Need guidance on your tech project or career path? I offer one-on-one consultation to help you plan, troubleshoot, or scale your idea. Whether you're starting a software project, exploring data solutions, or navigating a tech career, I provide clear, actionable advice tailored to your goals." }
// ]

// Blog Data
const blogData = [
    { date: "March 21, 2024", link: "/blog-details", author: "Admin", title: "Support Vector Machines", description: "Support Vector Machines are supervised learning models used for classification and regression tasks." },
    { date: "April 11, 2024", link: "/blog-details", author: "Admin", title: "Random Forests", description: "Random Forest is a powerful machine learning algorithm used for both classification and regression tasks." },
    { date: "May 18, 2024", link: "/blog-details", author: "Admin", title: "Principal Component Analysis", description: "Principal Component Analysis is an unsupervised dimensionality reduction technique." },
]

const blogHeaderData = [
    { sectionHeading: "Blog", sectionHeadingTwo: "My Blog", sectionText: "Take a look at some of my projects." }
];

// Resume Data
const ttuDescription = `
Graduated with a bachelor's degree in statistics.
Some of the modules that I went through during this time are:

1. Calculus,
2. Parametric and Non-parametric Methods,
3. Time Series Analysis,
4. Demographic Techniques,
5. Epidemiology,
6. Stochastic Processes,
7. Survival Analysis,
8. Experimental Design Analysis,
9. Bayesian Inference,
10. Statistical Quality Control Methods,
11. Probability and Statistics,
...and more.
`;

const plpDescription = `
The topics and skills covered were: 
1. Python Programming,
2. Database Design and Programming with SQL,
3. Startup Building for Developers, 
4. Software Engineering,
5. Web Development V2,
6. Ethics in Artificial Intelligence.
`;

const alxDescription = `
The topics and skills covered included the following: 
1. Self Awareness, 
2. Teamwork and Leadership, 
3. Communication and Quantitative Reasoning, 
4. Entrepreneurial Thinking, 
5. Critical Thinking, 
6. Task Management, 
7. Technical Skills.
`;

const udemyDescription = `
Completed a comprehensive course on full-stack web development, covering both front-end and back-end technologies: 
1. HTML and CSS, 
2. JavaScript, jquery, 
3. Node.js, Express.js, APIs,
4. PostgreSQL, 
5. React.js, 
6. Web design and deployment, 
7. Web3 and Blockchain, 
8. Token contract development, 
9. NFT minting, buying and selling logic.
`;

const education = [
  { date: "2018-2023", title: "Bsc in Statistics", school: "Taita Taveta University", description: ttuDescription },
  { date: "2025-Ongoing", title: "Software Engineering", school: "PLP Academy", description: plpDescription },
  { date: "2025-Ongoing", title: "Data Science", school: "ALX Africa", description: alxDescription },
];

const experience = [
  { date: "2022-2023", title: "Full-Stack Web Development", school: "Udemy", description: udemyDescription },
  // { date: "2014-2015", title: "Wordpress Developer", school: "Cambridge University" },
  // { date: "2017-2018", title: "UI/UX Designer", school: "Cambridge University" },
];

const resumeSectionHeaderData = {
  title: "My Resume",
  description: "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
};

// Skills Data
const skillsData = [
  { iconClass: 'fab fa-python', title: 'Python' },
  { iconClass: 'fab fa-r-project', title: 'R Programming' },
  { iconClass: 'fab fa-js', title: 'JavaScript' },
  { iconClass: 'fab fa-php', title: 'PHP' },
  { iconClass: 'fab fa-git-alt', title: 'Git' },
  { iconClass: 'fas fa-pencil-ruler', title: 'UI/UX Design' },
  { iconClass: 'fas fa-calculator', title: 'Quantitative Reasoning' },
  { iconClass: 'fas fa-brain', title: 'Critical Thinking' },
  { iconClass: 'fas fa-chart-line', title: 'Analytical Skills' },
  { iconClass: 'fas fa-tasks', title: 'Task Management' },
  { iconClass: 'fas fa-users', title: 'Teamwork' },
  { iconClass: 'fas fa-rocket', title: 'Deployment' },
];

// Interests Data
const interests = [
  { icon: 'fa-code', title: 'Coding', description: 'I love creating software and solving real-world problems.', },
  { icon: 'fa-music', title: 'Music', description: 'Music fuels my creativity and keeps me inspired.', },
  { icon: 'fa-book', title: 'Reading', description: 'I\'m passionate about learning through books and articles.', },
  { icon: 'fa-plane',  title: 'Travel',  description: 'Exploring new cultures broadens my perspective.', },
  { icon: 'fa-camera',  title: 'Photography',  description: 'Capturing moments and visual storytelling is one of my passions.', },
  { icon: 'fa-gamepad',  title: 'Gaming',  description: 'I enjoy immersive game worlds and competitive strategy games.', },
  { icon: 'fa-hands-helping',  title: 'Volunteering',  description: 'Giving back to the community gives me purpose and joy.', },
  { icon: 'fa-blog',  title: 'Tech Blogging',  description: 'I write about technology trends, tutorials, and coding tips.', },
];

export { 
    data, sectionHeaderData, serviceTopCardData, serviceBottomCardData, 
    blogData, blogHeaderData, education, experience, resumeSectionHeaderData,
    skillsData, interests
};

// const data = [
// 	{
// 		id: 1,
// 		imageNum: 'one',
// 		title: 'Branding & Illustration Design',
// 		category: 'Web Design',
// 		link: 'project1',
// 	},
// 	{
// 		id: 2,
// 		imageNum: 'two',
// 		title: 'Creative Website Development',
// 		category: 'Web Development',
// 		link: 'project2',
// 	},
// 	{
// 		id: 3,
// 		imageNum: 'one',
// 		title: 'E-commerce Platform Design',
// 		category: 'UI/UX Design',
// 		link: 'project3',
// 	},
// 	{
// 		id: 4,
// 		imageNum: 'two',
// 		title: 'Mobile App Design',
// 		category: 'App Design',
// 		link: 'project4',
// 	},
// ];

// const resultOne = data.filter(item => item.imageNum === "one")
// 	.map(item => {
// 		// Create a new object without the 'imageNum' key
// 		const { imageNum, ...rest } = item;
// 		return rest;
// 	});

// const resultTwo = data.filter(item => item.imageNum === "one")
// 	.map(item => {
// 		// Create a new object without the 'imageNum' key
// 		const { imageNum, ...rest } = item;
// 		return rest;
// 	});
