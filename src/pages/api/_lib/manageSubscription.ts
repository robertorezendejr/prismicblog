import { query as q } from 'faunadb';
import { fauna } from "../../../services/fauna";
import { stripe } from '../../../services/stripe';


export async function saveSubscription(
    subscriptionId: string,
    customerId: string,
    createAction = false,
) {

    console.log(subscriptionId, customerId);
    // Buscar o usuario no banco de dados do FaunaDB com o ID {customerId}
    const userRef = await fauna.query(
        q.Select(
            "ref",
            q.Get(
                q.Match(
                    q.Index('user_by_stripe_customer_id'),
                    customerId
                )
            )
        )
    )

    const subscription = await stripe.subscriptions.retrieve(subscriptionId)
    // salvar os dados  da incrição(subscription) do usuário no banco de dados FaunaDB com o ID {customerId}

    const subscriptionData = {
        id: subscription.id,
        userId: userRef,
        status: subscription.status,
        // ***voltar aqui - aqui está a primeira posição(subscription.items.data[0].price.id) quer dizer que o usuario so vai poder compra um produto, caso tenha mais tenho que voltar aqui para entender e mudar o código
        price_id: subscription.items.data[0].price.id,
    }
    
    if (createAction) {
        await fauna.query(
            q.Create(
                q.Collection('subscriptions'),
                { data: subscriptionData }
            )
        )
    } else {
        await fauna.query(
            // replace no lugar de update, nesse caso troco todos os dados do usauario e não atualizo spenas uns, verificar na documentação
            q.Replace(
                q.Select(
                    "ref",
                    q.Get(
                        q.Match(
                            q.Index('subscription_by_id'),
                            subscriptionId,
                        )
                    )
                ),

                { data: subscriptionData }
            )
            
        )
    }

}