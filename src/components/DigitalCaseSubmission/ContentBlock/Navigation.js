import React from "react"
import { Link } from "gatsby"


export function Navigation({data}){
  return(
    <div className={`block-navigation`}>
      <ul>
        {
          data.map(item => (
            <li>
              <Link
                activeStyle={{
                  background: `#EBBD62`,
                  color: `#fff`,
                }}
                to={item.Link_Page}>
                {item.Name_Page}
              </Link>
            </li>
          ))
        }
      </ul>
    </div>
  )
}