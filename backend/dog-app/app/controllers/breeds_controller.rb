class BreedsController < ApplicationController
    def index 
        breeds = Breed.all 
        render json: breeds
    end 

    def show 
        breed = Breed.find(params[:id])
        render json: breed
    end 

    def create 
        breed = Breed.create(
            breed: params[:breed],
            info: params[:info],
            image_url: params[:image_url],
            description: params[:description]
        )
        redirect_to 'https://localhost:3001'
    end 

    def update 
        breed = Breed.find(params[:id])
        breed.update( breed: params[:breed],
            info: params[:info],
            image_url: params[:image_url]
        )
        redirect_to 'https://localhost:3001'
    end 

    
end
