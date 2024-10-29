"use client"

import React, { useEffect } from "react";
import { useEditor } from "@/features/editor/hooks/use-editor";
const Editor = () => {
    const {init} = useEditor();

    useEffect(()=>{
        init();
    },[]);

  return <div>Editor</div>;
};

export default Editor;
