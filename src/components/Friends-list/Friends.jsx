import s from "./Friends.module.css"

export function FriendList({friends}) {
    return ( 
        <ul className={s.friendList}>
            {friends.map((friend) => {
            return (
              <FriendListItem avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline}/>

            )
        })}
        </ul>
    )
}

export function FriendListItem({avatar, name, isOnline}) {
    return(   
        <>
        <li class="item">
  <span className={s.status} style={{backgroundColor: isOnline ? "green" : "red"}}>{isOnline}</span>
  <img class="avatar" src={avatar} alt={name} width="48" />
  <p class="name">{name}</p>
       </li>
        </>
    )
}