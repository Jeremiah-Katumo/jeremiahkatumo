import React from "react";

export const groupProjectsInRows = (projects) => { 
    const grouped = [];
    const ones = projects.filter(project => project.imageNum === 'one');
    const twos = projects.filter(project => project.imageNum === 'two');

    const minLength = Math.min(ones.length, twos.length);

    for (let i = 0; i < minLength; i++) {
        grouped.push([ones[i], twos[i]]);
    }

    return grouped;
}

export const groupProjectsInRowsWithOne = (projects) => {
    const grouped = [];
    const ones = projects.filter(project => project.imageNum === 'one');
    const twos = projects.filter(project => project.imageNum === 'two');

    const minLength = Math.min(ones.length, twos.length);

    for (let i = 0; i < minLength; i++) {
        grouped.push([ones[i], twos[i]]);
    }

    if (ones.length > minLength) {
        grouped.push([ones[minLength]]);
    }

    return grouped;
}