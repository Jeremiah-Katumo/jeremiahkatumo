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
    { sectionHeading: "Projects", sectionText: "Take a look at some of my projects." }
];

// Services Data
const serviceTopCardData = [
    { category: "top", icon: "flaticon-analysis", heading: "Web Design", sectionHeading: "Services", sectionText: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia" },
    { category: "top", icon: "flaticon-flasks", heading: "Photography", sectionHeading: "Services", sectionText: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia" },
    { category: "top", icon: "flaticon-ideas", heading: "Web Developer", sectionHeading: "Services", sectionText: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia" },
]

const serviceBottomCardData = [
    { category: "bottom", icon: "flaticon-analysis", heading: "App Developing", sectionHeading: "Services", sectionText: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia" },
    { category: "bottom", icon: "flaticon-flasks", heading: "Branding", sectionHeading: "Services", sectionText: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia" },
    { category: "bottom", icon: "flaticon-ideas", heading: "Product Strategy", sectionHeading: "Services", sectionText: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia" }
]

export { data, sectionHeaderData, serviceTopCardData, serviceBottomCardData };