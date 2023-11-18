/* eslint-disable react/prop-types */
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import RateReviewOutlinedIcon from '@mui/icons-material/RateReviewOutlined';
import { Badge, Box, Button, CardMedia, Chip, Stack } from '@mui/material';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';



export default function DetailBlog() {

    const location = useLocation();
    const blogDetail = location.state

    const { userInfo } = useSelector(state => state.auth)

    const navigate = useNavigate()
    const [isCliked, setIsCliked] = useState(false)


    const isAuthor = blogDetail?.author === userInfo?.username



    return (
        <>
            <Box sx={{ display: 'flex', p: 10, pb: 0, flexDirection: { xs: 'column', md: "row" } }} >
                <CardContent sx={{ display: 'flex', flexGrow: 1, justifyContent: "space-between", flexDirection: "column" }} >
                    <Box>
                        <CardHeader
                            sx={{ mb: 5, p: 0 }}
                            avatar={
                                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                    {blogDetail?.author.slice(0, 1).toUpperCase()}
                                </Avatar>
                            }
                            title={<span style={{ fontWeight: 'bold', textTransform: 'uppercase' }}>{blogDetail?.author}</span>}
                            subheader={new Date(blogDetail?.publish_date).toLocaleString('us-US')}
                        />

                        <Box sx={{ p: 2, mb: 4 }}>
                            <Typography variant="h4" color="initial">{blogDetail?.title}</Typography>
                            <Typography variant="body1" color="text.secondary" mb={3}>{blogDetail?.content}</Typography>


                            <Chip variant="outlined" color="primary" size="small" label={"# " + blogDetail?.category_name} />

                        </Box>
                    </Box>


                    <CardActions disableSpacing sx={{ justifyContent: "space-between" }}>
                        <Box>
                            <IconButton aria-label="add to favorites" >
                                <Badge badgeContent={1} color="info">
                                    <FavoriteIcon sx={{ color: "gray" }} />
                                </Badge>
                            </IconButton>
                            <IconButton aria-label="view">
                                <Badge badgeContent={2} color="info" >
                                    <VisibilityOutlinedIcon />
                                </Badge>
                            </IconButton>
                            <IconButton aria-label="view" onClick={() => setIsCliked(!isCliked)}>
                                <Badge badgeContent={3} color="info">
                                    <RateReviewOutlinedIcon />
                                </Badge>
                            </IconButton>
                            <IconButton aria-label="share">
                                <ShareIcon />
                            </IconButton>
                        </Box>

                        <Box sx={{ display: 'flex', gap: 1, flexDirection: { xs: 'column', md: "row" } }}>



                            {
                                isAuthor &&
                                <Stack spacing={2} direction={{ md: 'column', lg: 'row' }} useFlexGap flexWrap="wrap">
                                    <Button variant="contained" color="success" >
                                        Update
                                    </Button>
                                    <Button variant="outlined" color="error" >
                                        Delete
                                    </Button>
                                </Stack>
                            }


                            <Button
                                onClick={() => navigate("/")}
                                variant="contained"
                                color="primary"
                            > Explore More</Button>
                        </Box>
                    </CardActions>
                </CardContent>
                <CardMedia
                    component="img"
                    image={blogDetail?.image}
                    alt={blogDetail?.title}
                    sx={{ objectFit: "contain", width: '100%', maxWidth: '700px', height: "auto", flexGrow: 1 }}
                />

            </Box>



        </>

    );
}








