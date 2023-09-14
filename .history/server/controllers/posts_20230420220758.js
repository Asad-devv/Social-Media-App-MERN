import Post from "../models/Post.js"


// create
export const createPost = async (req,res)=>{

    try {
        const {userId,description,picturePath} = req.<style>
            div {
                position: relative;
            }
        </style>
        
        <div data-spy="scroll" data-target="#navId">
            
            <div id="navId">
                <ul class="nav nav-tabs" role="tablist">
                    
                </ul>
            </div>
            
        </div>
        
        
        <script>
            $('div{1:div|body}').scrollspy({
                target: '#navId'
            });
        </script>
    } catch (err) {
        res.status(409).json({message:err.message})
    }
}