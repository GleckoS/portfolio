import React from "react"
import { Link } from "gatsby"

export const parser = (obj) => (
    <>
        {
            obj.map(el => (
                <>
                    {el.type === 'text'
                        ? <span>{el.text}</span>
                        : null
                    }
                    {el.type === 'link'
                        ? <Link to={el.link}>{el.text}</Link>
                        : null
                    }
                </>
            ))
        }
    </>
)
