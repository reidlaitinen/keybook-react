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
    results = select('devices.*')
              .where("devices.ip_address LIKE #{@query}")
    render json: results
  end

  private

  def set_query
    @query = params[:q]
  end
end
