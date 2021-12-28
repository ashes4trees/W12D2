class Api::SessionsController < ApplicationController

    before_action :ensure_logged_in, only: [:destroy]

    def create
        @user = User.find_by_credentials(
            params[:user][:username],
            params[:user][:password]
        )
        if @user
            login!(@user)
            # render api_user_url(@user)
            render 'api/users/show'
        else 
            render json: ['Invalid email or password'], status: 422
        end
    end

    def destroy
        logout!
        render json: {}
    end
end