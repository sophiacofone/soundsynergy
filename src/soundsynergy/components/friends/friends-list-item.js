import React from "react";

const FollowersListItem = ({friend = {}}) => {
    return (
        <li className="list-group-item rounded-0">
            <div className="row">
                <div className="col-2 p-0">
                    <img
                        className="rounded-circle w-100 float-right"
                        src={friend.profilePicture}
                        alt={`${friend.firstName} ${friend.lastName}`}
                    />
                </div>
                <div className="col-10">
                    <div>
                        <span className="fw-bold">{friend.userName}</span>
                        <span className="m-lg-1">
            </span>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default FollowersListItem;

