import React from "react";
import styles from "./Contact.module.css";
import friendAvatar from "../../../../img/Contacts/friend-avatar.jpg"
import {NavLink} from "react-router-dom";

type ContactPropsType = {
    id: string
    name: string
    email: string
    avatar: string
}

export const Contact = (props: ContactPropsType) => {
    return (
        <div className={styles.contact}>
            <div className={styles.avatar}>
                <img src={friendAvatar} alt={props.avatar}/>
            </div>
            <div className={styles.name}>
                <NavLink to={"/messages/" + props.id}>{props.name}</NavLink>
            </div>
            <div className={styles.email}>{props.email}</div>
        </div>
    )
}