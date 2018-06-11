class Api::CredentialsController < ApplicationController

  before_action :set_device, only: [:index]

  def create
  end

  def index
    render json: Credential.where(device_id: @device)
  end

  def update
  end

  def delete
  end

  def show
  end

  private

  def set_device
    @device = params[:device_id]
  end

end
