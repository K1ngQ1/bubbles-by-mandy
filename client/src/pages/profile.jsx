import React from "react";

//component imports
//admin
import AdminMain from "../components/profile/admin/adminMain.jsx";
//user
import User_info from "../components/profile/user_info.tsx";

export default function ProfilePage() {
    return (
        <div>
            <User_info />
            <AdminMain />
        </div>
    );
}
