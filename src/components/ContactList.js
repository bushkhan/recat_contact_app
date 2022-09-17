import React from 'react';
import ContactCard from './ContactCard';
const ContactList = (props)=>{

    const renderContactList = props.contacts.map((contact,i)=>{
        return  <ContactCard contact = {contact} key={i}></ContactCard>;
        
    });
    return (
        <div className='ui celled list'>{renderContactList}</div>
    );
}

export default ContactList;