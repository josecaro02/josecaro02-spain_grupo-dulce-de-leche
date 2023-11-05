"""empty message

Revision ID: 2e2ca0d72347
Revises: 3cc3909895d2
Create Date: 2023-11-05 10:15:18.831833

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '2e2ca0d72347'
down_revision = '3cc3909895d2'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('ingredientes_receta', schema=None) as batch_op:
        batch_op.add_column(sa.Column('cantidad', sa.Integer(), nullable=False))

    with op.batch_alter_table('receta', schema=None) as batch_op:
        batch_op.add_column(sa.Column('unidad_medida', sa.String(length=80), nullable=False))

    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.add_column(sa.Column('name', sa.String(length=80), nullable=False))
        batch_op.add_column(sa.Column('last_name', sa.String(length=80), nullable=False))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.drop_column('last_name')
        batch_op.drop_column('name')

    with op.batch_alter_table('receta', schema=None) as batch_op:
        batch_op.drop_column('unidad_medida')

    with op.batch_alter_table('ingredientes_receta', schema=None) as batch_op:
        batch_op.drop_column('cantidad')

    # ### end Alembic commands ###
