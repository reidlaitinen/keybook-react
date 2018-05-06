class Api::DevicesController < ApplicationController
  def create
  end

  def index
    render json: Device.all
  end

  def update
  end

  def delete
  end

  def show
  end
end
