class CardsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    if params[:date]   
      cards = Card.where(date: params[:date])
    else 
      cards = Card.order("created_at DESC")
    end
    render json: cards
  end

  def create
    card = Card.create(card_param)
    render json: card
  end

  def update
    card = Card.find(params[:id])
    card.update_attributes(card_param)
    render json: card
  end

  def destroy
    card = Card.find(params[:id])
    card.destroy
    head :no_content, status: :ok
  end
  
  private
    def card_param
      params.require(:card).permit!
    end
end
