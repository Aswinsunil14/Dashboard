import { useOne } from "@refinedev/core";
import { useParams } from "react-router-dom";

import { Profile } from "components";

const AgentProfile = () => {
    const { id } = useParams();
    console.log(id, "id");
    

    const { data, isLoading, isError } = useOne({
        resource: "users",
        id: id as string,
    });

    console.log(data);

    const Agent = data?.data ?? [];

    if (isLoading) return <div>loading...</div>;
    if (isError) return <div>error...</div>;

    return (
        <Profile
            type="Agent"
            name={Agent.name}
            email={Agent.email}
            avatar={Agent.avatar}
            properties={Agent.allProperties}
        />
    );
};

export default AgentProfile;