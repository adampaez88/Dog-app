class BreedsController < ApplicationController
    def index 
        breeds = Breed.all 
        render json: breeds
    end 

    def show 
        breed = Breed.find(params[:id])
        render json: breed, include: [:comments] 
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
        breed.update(breed_params)
        redirect_to 'https://localhost:3001'
    end 
    
    def destroy 
        breed = Breed.find(params[:id])
        breed.destroy
        render json: breed 
        redirect_to 'https://localhost:3001'
    end 
    private 

    def breed_params
        params.permit(:breed, :info, :image_url, :description)
    end 
end
