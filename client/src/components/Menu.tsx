import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import MuiMenu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'

const linkStyle = { color: '#343434', textDecoration: 'none' }
const activeLinkStyle = { ...linkStyle, backgroundColor: '#eee', borderRadius: '15px', padding: '10px' }
const links = [
    { title: 'Home', to: '/', activeSet: new Set(['/']) },
    { title: 'About', to: '/#about', activeSet: new Set(['/#about']) },
    { title: 'Services', to: '/#services', activeSet: new Set(['/#services']) },
    {
        title: 'Data Analytics',
        to: '#',
        children: [
            { title: 'Users', to: '/users', activeSet: new Set(['/users']) },
            { title: 'Groups', to: '/groups', activeSet: new Set(['/groups', '/group']) },
            { title: 'Teams', to: '/teams', activeSet: new Set(['/teams']) },
            { title: 'SharePoint', to: '/sharepoint', activeSet: new Set(['/sharepoint']) },
            { title: 'OneDrive', to: '/onedrive', activeSet: new Set(['/onedrive']) },
            { title: 'Reports', to: '/reports', activeSet: new Set(['/reports']) },
        ],
    },
    { title: 'Contact', to: '/#contact', activeSet: new Set(['/#contact']) },
]

export const Menu = () => {
    const location = useLocation()
    const [activeLink, setActiveLink] = useState('')
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl)
    const handleClick = (link: (typeof links)[0], event: React.MouseEvent<HTMLAnchorElement>) => {
        if (link.children) {
            setAnchorEl(event.currentTarget)
        } else {
            handleClose()
        }
    }
    const handleClose = () => {
        setAnchorEl(null)
    }

    useEffect(() => {
        const pathHash = `${location.pathname}${location.hash}`
        setActiveLink(
            links.find(
                link => link.activeSet?.has(pathHash) || link.children?.find(child => child.activeSet.has(pathHash))
            )?.to || ''
        )
    }, [location])

    return (
        <>
            <div
                style={{
                    height: '60px',
                    width: 'calc(90vw - 64px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    margin: '10px 5vw',
                    padding: '0 32px',
                    fontSize: '16px',
                    fontWeight: 600,
                    borderRadius: '16px',
                    backgroundColor: 'rgba(0,0,0,0.03)',
                    position: 'absolute',
                }}
            >
                <div style={{ fontSize: '22px' }}>
                    <Link to="/" style={linkStyle}>
                        M365 Pulse
                    </Link>
                </div>
                <div>
                    <ul
                        style={{
                            listStyleType: 'none',
                            padding: 0,
                            display: 'flex',
                            gap: '16px',
                        }}
                    >
                        {links.map(link => (
                            <li key={link.title}>
                                <Link
                                    to={link.to}
                                    style={activeLink === link.to ? activeLinkStyle : linkStyle}
                                    onClick={e => handleClick(link, e)}
                                >
                                    {link.title}
                                </Link>
                                {link.children ? (
                                    <MuiMenu
                                        id="basic-menu"
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={handleClose}
                                        MenuListProps={{
                                            'aria-labelledby': 'basic-button',
                                        }}
                                    >
                                        {link.children.map(subLink => (
                                            <MenuItem onClick={handleClose}>
                                                <Link
                                                    to={subLink.to}
                                                    style={activeLink === subLink.to ? activeLinkStyle : linkStyle}
                                                    onClick={e => handleClick(link, e)}
                                                >
                                                    {subLink.title}
                                                </Link>
                                            </MenuItem>
                                        ))}
                                    </MuiMenu>
                                ) : null}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}
