class Api::CredentialsController < ApplicationController

  before_action :set_device, only: [:index]
  before_action :set_credential, only: [:update, :delete]

  def create
  end

  def index
    render json: Credential.where(device_id: @device)
  end

  def update
  end

  def destroy
    @credential.destroy
  end

  def show
  end

  private

  def set_device
    @device = params[:device_id]
  end

  def set_credential
    @credential = Credential.find(params[:id])
  end

end
