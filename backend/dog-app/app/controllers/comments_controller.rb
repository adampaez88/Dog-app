class CommentsController < ApplicationController

   

    def create 
        comment = Comment.create(content: params[:content], breed_id: params[:breed_id])
        render json: comment 
    end
    
    def destroy
        comment = Comment.find(params[:id])
        comment.destroy 
        render json: comment 
    end 


end
