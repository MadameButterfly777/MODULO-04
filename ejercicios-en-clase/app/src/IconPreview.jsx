// src/IconPreview.jsx
import React from "react";
import { FaReact, FaGithub } from "react-icons/fa";
import { MdHome, MdEmail } from "react-icons/md";
import { AiFillHeart } from "react-icons/ai";
import { FiCamera } from "react-icons/fi";
import { SiJavascript } from "react-icons/si";

export default function IconPreview() {
  const items = [
    { label: "FaReact", Icon: FaReact },
    { label: "FaGithub", Icon: FaGithub },
    { label: "MdHome", Icon: MdHome },
    { label: "MdEmail", Icon: MdEmail },
    { label: "AiFillHeart", Icon: AiFillHeart },
    { label: "FiCamera", Icon: FiCamera },
    { label: "SiJS", Icon: SiJavascript },
  ];

  return (
    <div style={{ padding: 20 }}>
      <h2>Previsualizador de iconos</h2>
      <div style={{ display: "flex", gap: 18, flexWrap: "wrap", marginTop: 12 }}>
        {items.map(({ label, Icon }) => (
          <div key={label} style={{ width: 120, textAlign: "center" }}>
            <div style={{ fontSize: 36 }}>
              <Icon />
            </div>
            <div style={{ fontSize: 12, marginTop: 6 }}>{label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
