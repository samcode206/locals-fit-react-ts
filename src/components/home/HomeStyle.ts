import {CSSProperties} from 'react';


export const header : CSSProperties = {
    maxWidth: "95%",
    margin: "auto", 
    display: "grid",
    gridTemplateColumns: "1fr 1fr", 
    gridTemplateRows: "1fr", 
    gap: "0px 20px",
    height: "90vh"
}; 


export const headerTitle : CSSProperties = {
    marginTop:"10%",
    textAlign: "center",
    letterSpacing: "0.7rem", 
    fontSize: "1.5rem",
    fontWeight: "bold"
}; 

export const headerSubTitle : CSSProperties = { 
    marginTop:"10%",
    textAlign: "center", 
    letterSpacing:" 0.8rem", 
    fontSize: "1.3rem"
}; 

export const contentContainer : CSSProperties = {
    display: "grid", 
    gridTemplateColumns: "1fr 1fr",
    gridTemplateRows: "1fr 1fr 1fr", 
    gap: "10px 10px",
    maxWidth:"95%", 
    margin: "auto"
}; 


export const contentTypography : CSSProperties = {
    fontSize: "1.2rem",
    marginTop: "10%",
    lineHeight:"2rem"
}; 
