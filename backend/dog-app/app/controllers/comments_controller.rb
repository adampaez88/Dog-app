class CommentsController < ApplicationController

   

    def create 
        comment = Comment.create(content: params[:content], breed_id: params[:breed_id])
        render json: comment 
    end

    # def update 
    #     comment = Comment.find(params[:id])
    #     comment.update(content: params[:content])
    #     render json: comment

    # end 
    
    def destroy
        comment = Comment.find(params[:id])
        comment.destroy 
        render json: comment 
    end 


end
