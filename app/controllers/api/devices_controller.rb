class Api::DevicesController < ApplicationController

  before_action :set_query, only: [:search]
  before_action :set_device, only: [:update, :delete, :show]

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
    render json: Device.find(@device)
  end

  def search
    results = Device.where("
        LOWER(name) LIKE ? 
        OR ip_address LIKE ? 
        OR category LIKE ?
        OR LOWER(location) LIKE ?", "%#{@query}%", "%#{@query}%", "%#{@query}%", "%#{@query}%")
    render json: results
  end

  private

  def set_device
    @device = params[:id]
  end

  def set_query
    @query = params[:query]
  end
end
