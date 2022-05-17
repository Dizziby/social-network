import React, {useEffect} from "react";
import styles from "./ProfileInfo.module.css"
import userAvatar from "../../../../../img/user-avatar.jpg";
import {useAppDispatch, useAppSelector} from "../../../../../redux/hooks";
import {getUserProfileTC} from "../../../../../redux/reducers/profileReducer";
import {useParams} from "react-router-dom";

export const ProfileInfo = () => {

    const dispatch = useAppDispatch()

    const infoProfile =  useAppSelector(state => state.profileData.profile)
    let { id } = useParams<"id">();

    useEffect(() => {
        id && dispatch(getUserProfileTC(id))
    }, [])

    return (
        <div className={styles.profileInfo}>
            <div>
                <img className={styles.userAvatar} src={infoProfile?.photos.large !== null ? infoProfile?.photos.large : userAvatar}/>
            </div>
            <div>
                <p><b>Name:</b> {infoProfile?.fullName}</p>
                <p><b>About me:</b> {infoProfile?.aboutMe
                    ? infoProfile?.aboutMe
                    : "No information"
                } </p>
                <p><b>Job:</b> {infoProfile?.lookingForAJobDescription
                    ? infoProfile?.lookingForAJobDescription
                    : "No work"
                } </p>
                <hr/>
                <p><b>Contacts</b></p>
                <hr/>
                <p><b>facebook:</b> {infoProfile?.contacts.facebook
                    ? infoProfile?.contacts.facebook
                    : "facebook.com"
                } </p>
                <p><b>vk:</b> {infoProfile?.contacts.vk
                    ? infoProfile?.contacts.vk
                    : "vk.com"
                } </p>
                <p><b>twitter:</b> {infoProfile?.contacts.twitter
                    ? infoProfile?.contacts.twitter
                    : "twitter.com"
                } </p>
                <p><b>instagram:</b> {infoProfile?.contacts.instagram
                    ? infoProfile?.contacts.instagram
                    : "instagram.com"
                } </p>
                <p><b>github:</b> {infoProfile?.contacts.github
                    ? infoProfile?.contacts.github
                    : "github.com"
                } </p>
            </div>
        </div>
    )
}