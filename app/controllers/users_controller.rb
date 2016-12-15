class UsersController < ApplicationController

  before_action :authorized_user, except: [:index, :new, :create]

  def index
    @all_users = User.all
  end

  def show
    @user = User.find_by id: params["id"]
  end

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      session[:user_id] = @user.id
      flash[:create] = "Account created successfully"
      redirect_to start_app_path
    else
      render 'new'
    end
  end

  def edit
    @user = User.find_by id: params["id"]
  end

  def update
    @user = @current_user
    @user.assign_attributes(user_params)
    if @user.save
      flash[:update] = "Account updated successfully"
      redirect_to @user
    else
      render 'new'
    end
  end

  def destroy
    @user = @current_user.delete
    flash[:delete] = "Account deleted successfully"
    redirect_to root_url
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :address, :password, :password_confirmation)
  end

end
