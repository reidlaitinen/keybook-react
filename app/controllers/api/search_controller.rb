class Api::SearchController < ApplicationController

  def index
    
  end

  private

  def search_params
    params.require(:search).permit(:name, :ip_address, :location, :category)
end
