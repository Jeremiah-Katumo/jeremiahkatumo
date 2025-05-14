import React from "react";

// Projects Data
const data = [
    { id: 1, imageNum: 'one', title: 'Branding & Illustration Design', category: 'Web Design', link: 'project1' },
    { id: 2, imageNum: 'two', title: 'Creative Website Development', category: 'Web Development', link: 'project2' },
    { id: 3, imageNum: 'one', title: 'E-commerce Platform Design', category: 'UI/UX Design', link: 'project3' },
    { id: 4, imageNum: 'two', title: 'Mobile App Design', category: 'App Design', link: 'project4' },
    { id: 5, imageNum: 'one', title: 'Portfolio Showcase Design', category: 'Web Design', link: 'project5' },
    { id: 6, imageNum: 'two', title: 'SaaS Dashboard UI', category: 'Dashboard UI', link: 'project6' },
];

const sectionHeaderData = [
    { sectionHeading: "Projects", sectionHeadingTwo: "My Projects", sectionText: "Take a look at some of my projects." }
];

// Services Data
const serviceTopCardData = [
    { category: "top", icon: "flaticon-analysis", heading: "Web Design", sectionHeading: "Services", sectionText: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia" },
    { category: "top", icon: "flaticon-flasks", heading: "Photography", sectionHeading: "Services", sectionText: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia" },
    { category: "top", icon: "flaticon-ideas", heading: "Web Developer", sectionHeading: "Services", sectionText: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia" },
]

const serviceBottomCardData = [
    { category: "bottom", icon: "flaticon-analysis", heading: "App Developing", sectionHeading: "Services", sectionHeadingTwo: "My Services", sectionText: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia" },
    { category: "bottom", icon: "flaticon-flasks", heading: "Branding", sectionHeading: "Services", sectionHeadingTwo: "My Services", sectionText: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia" },
    { category: "bottom", icon: "flaticon-ideas", heading: "Product Strategy", sectionHeading: "Services", sectionHeadingTwo: "My Services", sectionText: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia" }
]

// Blog Data
const blogData = [
    { date: "June 21, 2019", link: "/blog-details", author: "Admin", title: "Support Vector Machines", description: "Classification using support vector machines is one of the efficient methods when dealing with classes" },
    { date: "June 21, 2019", link: "/blog-details", author: "Admin", title: "Support Vector Machines", description: "Classification using support vector machines is one of the efficient methods when dealing with classes" },
    { date: "June 21, 2019", link: "/blog-details", author: "Admin", title: "Support Vector Machines", description: "Classification using support vector machines is one of the efficient methods when dealing with classes" },
]

const blogHeaderData = [
    { sectionHeading: "Blog", sectionHeadingTwo: "My Blog", sectionText: "Take a look at some of my projects." }
];

export { data, sectionHeaderData, serviceTopCardData, serviceBottomCardData, blogData, blogHeaderData };

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
