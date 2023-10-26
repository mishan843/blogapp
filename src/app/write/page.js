"use client"

import Image from "next/image";
import styles from "./writePage.module.css";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";
import {AiOutlinePlus, AiOutlineVideoCameraAdd} from 'react-icons/ai'
import {BiImage, BiLinkExternal} from 'react-icons/bi'

const WritePage = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  return (
    <div className={styles.container}>
      <input type="text" placeholder="Title" className={styles.input}/>
      <div className={styles.editor}>
        <button className={styles.button} onClick={() => setOpen(!open)}>
            <AiOutlinePlus width={16} height={16} />
          {/* <Image src="/plus.png" alt="" width={16} height={16} /> */}
        </button>
        {open && (
            <div className={styles.add}>
            <button className={styles.addButton}>
                <BiImage/>
            </button>
            <button className={styles.addButton}>
                <AiOutlineVideoCameraAdd/>
            </button>
            <button className={styles.addButton}>
                <BiLinkExternal/>
            </button>
          </div>
        )}
        <ReactQuill className={styles.textArea} theme="bubble" value={value} onChange={setValue} placeholder="Tell your Story..."/>
      </div>
      <button className={styles.publish}>Publish</button>
    </div>
  );
};

export default WritePage;
