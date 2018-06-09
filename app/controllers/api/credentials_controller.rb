class Api::CredentialsController < ApplicationController

  before_action :set_device, only: [:index]

  def create
  end

  def index
  end

  def update
  end

  def delete
  end

  def show
  end

  private

  def set_device
    @device = params[:id]
  end

end
