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
import { Badge, Box, Button, Chip, Stack } from '@mui/material';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';



export default function BlogCard({ blog }) {



    const { id, title, content, image, publish_date, author, likes, post_views, comment_count, category_name } = blog

    const date = new Date(publish_date).toLocaleString('us-US')


    console.log(date);

    return (
        <Box sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)', display: 'flex', justifyContent: 'space-between', p: 2 }}>
            <Box sx={{ flex: '3 0 0' }} >
                <CardHeader 
                
                    avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                            A
                        </Avatar>
                    }
                    title={<span style={{ fontWeight: 'bold', textTransform: 'uppercase' }}>{author}</span>}
                    subheader={date}
                />
                <CardContent sx={{paddingTop:0}}>
                    <Typography variant="h5" color="initial" >{title}</Typography>

                    <Typography variant="body2" color="text.secondary" mb={1} sx={{
                        overflow: 'hidden',
                        // textOverflow: 'ellipsis',
                        whiteSpace: 'wrap'
                    }}>{content.slice(0, 150)}...</Typography>
                    <Chip   size="small" sx={{backgroundColor:'#F2F2F2'}} label={"# " + category_name} />

                </CardContent>

                <CardActions disableSpacing sx={{ justifyContent: "space-between", flexDirection: { xs: 'column', md: 'row' } }}>
                    <Box>
                        <IconButton aria-label="add to favorites" >
                            <Badge badgeContent={likes} color="info">
                                <FavoriteIcon sx={{ color: "gray" }} />
                            </Badge>
                        </IconButton>
                        <IconButton aria-label="view">
                            <Badge badgeContent={post_views} color="info" >
                                <VisibilityOutlinedIcon />
                            </Badge>
                        </IconButton>
                        <IconButton aria-label="view">
                            <Badge badgeContent={comment_count} color="info">
                                <RateReviewOutlinedIcon />
                            </Badge>
                        </IconButton>
                        <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton>
                    </Box>
                </CardActions>

            </Box>

            <Stack justifyContent={'center'} alignItems={'center'} marginXY={'auto'} sx={{ flex: '1 0 0' }}>
                <img style={{ objectFit: "contain", height: '80%', width: '80%' }} src={image} alt={title} />
            </Stack>

        </Box>
    );
}
