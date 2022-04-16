import React from "react";
import styles from "./MyPage.module.css"
import AddPost from "./AddPost/AddPost";
import Posts from "./Posts/Posts";

const MyPage = () => {
    return (
        <div className={styles.myPage}>
            <AddPost />
            <Posts />
        </div>
    )
}

export default MyPage;