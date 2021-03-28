import React from 'react';

export const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
// export default function validate(fieldName, value) {
    
//     var regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//     var passwordRegex = /^[A-Za-z\d@$!%*#?&-_]{6,}$/;
//     var phoneCodeRegex = /^(\+?\d{1,3}|\d{1,4})$/
//     var phoneNoRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im


//     switch (fieldName) {

//         case 'email':
//             if ((value === null) || (value === undefined) || (value === '')) {
//                 return {
//                     status: false,
//                     error: 'Please enter email address.'
//                 }
//             }
//             else if ((value.length > 64) || (value.length <= 2)) {
//                 return {
//                     status: false,
//                     error: 'Please enter valid email address.'
//                 }
//             }
//             else if (regexEmail.test(value) === false) {
//                 return {
//                     status: false,
//                     error: 'Please enter valid email address.'
//                 }
//             }
//             else {
//                 return {
//                     status: true,
//                 }
//             }
//         case 'firstName':
//             if ((value === null) || (value === undefined) || (value === '')) {
//                 return {
//                     status: false,
//                     error: 'Please enter your first name.'
//                 }
//             }
//             else if ((value.length > 64) || (value.length < 2)) {
//                 return {
//                     status: false,
//                     error: 'Please enter valid first name.'
//                 }
//             }
//             else {
//                 return {
//                     status: true,
//                 }
//             }
//         case 'lastName':
//             if ((value === null) || (value === undefined) || (value === '')) {
//                 return {
//                     status: false,
//                     error: 'Please enter your last name.'
//                 }
//             }
//             else if ((value.length > 64) || (value.length < 2)) {
//                 return {
//                     status: false,
//                     error: 'Please enter valid last name.'
//                 }
//             }
//             else {
//                 return {
//                     status: true,
//                 }
//             }
//         case 'fullName':
//             if ((value === null) || (value === undefined) || (value === '')) {
//                 return {
//                     status: false,
//                     error: 'Please enter your full name '
//                 }
//             }
//             else if ((value.length > 64) || (value.length < 2)) {
//                 return {
//                     status: false,
//                     error: 'Please enter valid full name'
//                 }
//             }
//             else {
//                 return {
//                     status: true,
//                 }
//             }
//         case 'password':
//             if ((value === null) || (value === undefined) || (value === '')) {
//                 return {
//                     status: false,
//                     error: 'Please enter password.'
//                 }
//             }
//             else if (!passwordRegex.test(value)) {
//                 return {
//                     status: false,
//                     error: 'Password must contain minimum six characters.'
//                 }
//             }
//             else {
//                 return {
//                     status: true,
//                 }
//             }
//         case 'countryCode':
//             if ((value === null) || (value === undefined) || (value === '')) {
//                 return {
//                     status: false,
//                     error: 'Please enter country code.'
//                 }
//             }
//             else if (!phoneCodeRegex.test(value)) {
//                 return {
//                     status: false,
//                     error: 'Please enter valid country code.'
//                 }
//             }
//             else {
//                 return {
//                     status: true,
//                 }
//             }
//         case 'phoneNo':
//             if ((value === null) || (value === undefined) || (value === '')) {
//                 return {
//                     status: false,
//                     error: 'Please enter phone number.'
//                 }
//             }
//             else if (!phoneNoRegex.test(value)) {
//                 return {
//                     status: false,
//                     error: 'Please enter valid phone number.'
//                 }
//             }
//             else {
//                 return {
//                     status: true,
//                 }
//             }


//     }


// }
