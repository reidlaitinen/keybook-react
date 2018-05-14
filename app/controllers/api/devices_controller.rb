class Api::DevicesController < ApplicationController

  before_action :set_query, only: [:search]

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

  def search
    results = Device.where("
        LOWER(name) LIKE ? 
        OR ip_address LIKE ? 
        OR category LIKE ?
        OR LOWER(location) LIKE ?", "%#{@query}%", "%#{@query}%", "%#{@query}%", "%#{@query}%")
    render json: results
  end

  private

  def set_query
    @query = params[:query]
  end
end
